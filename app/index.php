<?php

    $ytChannelRegex = "/^http:\\/\\/www\\.youtube\\.com\\/user\\/(.*)$/";
    $ytPlaylistRegex = "/^http:\\/\\/www\\.youtube\\.com\\/view_play_list\\?p=(.*)$/";
    $ytThumbRegex ="/^http:\\/\\/i[0-9]?\\.ytimg\\.com\\/vi\\/([\\w-]+)\\/(sd|hq|mq)?default\\.jpg$/";
    $ytApiKey = "AIzaSyBWTbnENN8StmCSjgRwJ5AfGhEvXewgAJk";
    $ytGdata = "https://www.googleapis.com/youtube/v3";
    $ytParam = "&key=$ytApiKey";
    $ytBannerImageNames = array(
        'bannerTvHighImageUrl',
        'bannerTvImageUrl',
        'bannerTvLowImageUrl',
    );

    function get_json($url) {

        return json_decode(file_get_contents($url), true);
    }

    function fetch_yt_video($videoId) {

        global $ytGdata, $ytParam;

        if ($videoId == null) {
            return null;
        }
        $ytVideo = get_json("$ytGdata/videos/?part=snippet,contentDetails&id=$videoId&$ytParam");
        if ($ytVideo == null || !is_array($ytVideo['items']) || count($ytVideo['items']) == 0 ||
            isset($ytVideo['error'])) {

            return null;
        }
        $item = $ytVideo['items'][0];
        $snippet = $item['snippet'];
        $regex = '/^PT(\\d+)M(\\d+)S$/';
        $durationStr = $item['contentDetails']['duration'];
        if (preg_match($regex, $durationStr, $matches)) {
            $snippet['duration'] = $machtes[1] * 60 + $matches[2];
        }
        $snippet['link'] = "http://www.youtube.com/watch?v=" . $item['id'];

        return $snippet;
    }

    function htmlsafe($str) {

        return $str ? htmlspecialchars($str) : '&nbsp;';
    }

    $host = $_SERVER['HTTP_HOST'];
    $localhost = "localhost:8080";
    list($msoName, $remain) = explode('.', $host, 2);

    $content = file_get_contents(__DIR__ . '/index.html');

    $ch = isset($_GET['ch']) ? $_GET['ch'] : null;
    $ep = isset($_GET['ep']) ? $_GET['ep'] : null;
    $content = str_replace("{{meta_nn_ch}}", htmlsafe($ch), $content);
    $content = str_replace("{{meta_nn_ep}}", htmlsafe($ep), $content);

    if ($ch && preg_match('/^\\d+$/', $ch)) {

        $chMeta = get_json("http://$localhost/api/channels/$ch");

        if ($ep) {
    
            if (preg_match('/^e(\\d+)$/', $ep, $matches)) {
    
                $meta = get_json("http://$localhost/api/episodes/$matches[1]");
                if ($meta) {
                    if ($chMeta['sourceUrl']) { // YouTube sync
                        $programs = get_json("http://$localhost/api/episodes/$matches[1]/programs");
                        if ($programs && is_array($programs) && count($programs) > 0) {
                            $videoId = substr($programs[0]['fileUrl'], 31);
                            $ytVideo = fetch_yt_video($videoId);
                            if ($ytVideo) {
                                if ($is_array($ytVideo['thumbnails']) && count($ytVideo['thumbnails']) > 0) {
                                    $thumb = array_pop($ytVideo['thumbnails']);
                                    $content = str_replace("{{meta_thumbnail}}", $thumb['url'], $content);
                                }
                                if ($ytVideo['title']) {
                                    $content = str_replace("{{meta_title}}", htmlsafe($ytVideo['title']), $content);
                                }
                                if ($ytVideo['description']) {
                                    $content = str_replace("{{meta_description}}", htmlsafe($ytVideo['description']), $content);
                                }
                                if ($ytVideo['link']) {
                                    $content = str_replace("{{meta_yt_link}}", htmlsafe($ytVideo['link']), $content);
                                }
                            }
                        }
                    } else if (preg_match($ytThumbRegex, $meta['imageUrl'], $matches)) {

                        $ytVideo = fetch_yt_video($matches[1]);
                        if ($ytVideo) {
                            if (is_array($ytVideo['thumbnails']) && count($ytVideo['thumbnails']) > 0) {
                                $thumb = array_pop($ytVideo['thumbnails']);
                                $content = str_replace("{{meta_thumbnail}}", $thumb['url'], $content);
                            }
                            if ($ytVideo['link']) {
                                $content = str_replace("{{meta_yt_link}}", htmlsafe($ytVideo['link']), $content);
                            }
                        }
                    }
                    $content = str_replace("{{meta_title}}", htmlsafe($meta['name']), $content);
                    $content = str_replace("{{meta_description}}", htmlsafe($meta['intro']), $content);
                    $content = str_replace("{{meta_thumbnail}}", htmlsafe($meta['imageUrl']), $content);
                    $content = str_replace("{{meta_url}}", "http://$host/view/p$ch/$ep", $content);
                }
            } else if (preg_match('/^(\\d+)$/', $ep, $matches)) {

                $ytProgram = get_json("http://$localhost/api/ytprograms/$matches[1]");
                if ($ytProgram) {

                    $ytVideo = fetch_yt_video($ytProgram['ytVideoId']);
                    if ($ytVideo) {
                        if (is_array($ytVideo['thumbnails']) && count($ytVideo['thumbnails']) > 0) {
                            $thumb = array_pop($ytVideo['thumbnails']);
                            $content = str_replace("{{meta_thumbnail}}", $thumb['url'], $content);
                        }
                        if ($ytVideo['title']) {
                            $content = str_replace("{{meta_title}}", htmlsafe($ytVideo['title']), $content);
                        }
                        if ($ytVideo['description']) {
                            $content = str_replace("{{meta_description}}", htmlsafe($ytVideo['description']), $content);
                        }
                        if ($ytVideo['link']) {
                            $content = str_replace("{{meta_yt_link}}", htmlsafe($ytVideo['link']), $content);
                        }
                    }
                    $content = str_replace("{{meta_title}}", htmlsafe($ytProgram['name']), $content);
                    $content = str_replace("{{meta_description}}", trim(htmlsafe($ytProgram['intro'])), $content);
                    $content = str_replace("{{meta_thumbnail}}", htmlsafe($ytProgram['imageUrl']), $content);
                    $content = str_replace("{{meta_url}}", "http://$host/view/p$ch/$ep", $content);
                }
            } else if (preg_match("/^yt([\\w-]+)$/", $ep, $matches)) {

                $ytVideo = fetch_yt_video($matches[1]);
                if ($ytVideo) {
                    $thumb = array_pop($ytVideo['thumbnails']);
                    $content = str_replace("{{meta_thumbnail}}", $thumb['url'], $content);
                    $content = str_replace("{{meta_title}}", htmlsafe($ytVideo['title']), $content);
                    $content = str_replace("{{meta_description}}", htmlsafe($ytVideo['description']), $content);
                    $content = str_replace("{{meta_url}}", "http://$host/view/p$ch/$ep", $content);
//                    $content = str_replace("{{meta_type}}", "video.tv_show", $content);
//                    $content = str_replace("{{meta_video}}", htmlsafe("http://www.youtube.com/v/$matches[1]?version=3&autohide=1"), $content);
//                    $content = str_replace("{{meta_video_type}}", "application/x-shockwave-flash", $content);
//                    $content = str_replace("{{meta_video_width}}", "480", $content);
//                    $content = str_replace("{{meta_video_height}}", "360", $content);
//                    $content = str_replace("{{meta_video_duration}}", $ytVideo['duration']['seconds'], $content);
                    $content = str_replace("{{meta_yt_link}}", htmlsafe($ytVideo['link']), $content);
                }
            }
        } else if ($chMeta) {

            if (preg_match($ytChannelRegex, $chMeta['sourceUrl'], $matches)) {

                $ytChannelId = $matches[1];
                if (!preg_match('/^UC/', $ytChannelId)) {
                    $data = get_json("$ytGdata/channels?part=id&forUsername=$ytChannelId&$ytParam");
                    if (isset($data['items']) && is_array($data['items']) && count($data['items']) > 0) {
                        $item = array_pop($data['items']);
                        $ytChannelId = $item['id'];
                    }
                }
                $data = get_json("$ytGdata/channels?part=brandingSettings&id=$ytChannelId&$ytParam");
                if (isset($data['items']) && is_array($data['items']) && count($data['items']) > 0) {
                    $item = array_pop($data['items']);
                    $brandingSettings = $item['brandingSettings'];
                    if (isset($brandingSettings['image']) && is_array($brandingSettings['image'])) {
                        $image = $brandingSettings['image'];
                        for ($i = 0; $i < count($ytBannerImageNames); $i++) {
                            if (isset($image[$ytBannerImageNames[$i]])) {
                                $content = str_replace('{{meta_thumbnail}}', $image[$ytBannerImageNames[$i]], $content);
                                break;
                            }
                        }
                    }
                }
            } else if (preg_match($ytPlaylistRegex, $chMeta['sourceUrl'], $matches)) {

                $data = get_json("$ytGdata/playlists?part=snippet&id=$matches[1]&$ytParam");
                if (isset($data['items']) && is_array($data['items'])) {

                    $item = array_pop($data['items']);
                    $snippet = $item['snippet'];
                    if (isset($snippet['thumbnails']) && is_array($snippet['thumbnails']) && count($snippet['thumbnails']) > 0) {
                        $thumb = array_pop($snippet['thumbnails']);
                        $content = str_replace('{{meta_thumbnail}}', $thumb['url'], $content);
                    }
                }
            }
            $content = str_replace("{{meta_title}}", htmlsafe($chMeta['name']), $content);
            $content = str_replace("{{meta_description}}", htmlsafe($chMeta['intro']), $content);
            $content = str_replace("{{meta_thumbnail}}", htmlsafe(is_null($chMeta['bannerImageUrl']) ? $chMeta['imageUrl'] : $chMeta['bannerImageUrl']), $content);
            $content = str_replace("{{meta_url}}", "http://$host/view/p$ch", $content);
        }
    }
    $mso = get_json("http://$localhost/api/mso/$msoName");
    if ($mso == null) {
        // fallback
        $mso = get_json("http://$localhost/api/mso/9x9");
    }
    if ($mso['title']) $content = str_replace("{{meta_title}}", htmlsafe($mso['title']), $content);
    if ($mso['intro']) $content = str_replace("{{meta_description}}", htmlsafe($mso['intro']), $content);
    if ($mso['logoUrl']) $content = str_replace("{{meta_thumbnail}}", htmlsafe($mso['logoUrl']), $content);
    $content = str_replace("{{favicon}}", htmlsafe($mso['jingleUrl']), $content);

    $content = str_replace("{{meta_title}}", "9x9 flirp landing page", $content);
    $content = str_replace("{{meta_description}}", htmlsafe(null), $content);
    $content = str_replace("{{meta_thumbnail}}", htmlsafe(null), $content);
    $content = str_replace("{{meta_url}}", "http://$host/view/", $content);
    $content = str_replace("{{meta_type}}", "website", $content);
    $content = str_replace("{{meta_site_name}}", $host, $content);
//    $content = str_replace("{{meta_video}}", "", $content);
//    $content = str_replace("{{meta_video_type}}", "", $content);
//    $content = str_replace("{{meta_video_width}}", "", $content);
//    $content = str_replace("{{meta_video_height}}", "", $content);
//    $content = str_replace("{{meta_video_duration}}", "", $content);

    header('Content-Type: text/html');
    header('Content-Length: ' . strlen($content));
    
    echo $content;

