<?php

    $ytChannelRegex = "/^http:\\/\\/www\\.youtube\\.com\\/user\\/(.*)$/";
    $ytPlaylistRegex = "/^http:\\/\\/www\\.youtube\\.com\\/view_play_list\\?p=(.*)$/";
    $ytThumbRegex ="/^http:\\/\\/i[0-9]?\\.ytimg\\.com\\/vi\\/([\\w-]+)\\/(sd|hq|mq)?default\\.jpg$/";
    $ytApiKey = "AI39si7lCrdz_clsMg5Ssip-jeguuZIZZ7Zev-pz35ay43sH2ApxagMgtUOa6j3kWpcOU-2P-ERJ44oLwRdbidDJJlPR2nKCGw";
    $ytGdata = "http://gdata.youtube.com";
    $ytParam = "v=2&alt=json&key=$ytApiKey";

    function fetch_yt_video($videoId) {

        global $ytGdata, $ytParam;

        if ($videoId == null) {
            return null;
        }
        $ytVideo = json_decode(file_get_contents("$ytGdata/feeds/api/videos/$videoId?$ytParam"), true);
        if ($ytVideo == null || !isset($ytVideo['entry'])) {
            return null;
        }
        if (isset($ytVideo['entry']['media$group']['media$description'])) {
            // shortcut
            $ytVideo['entry']['description'] = $ytVideo['entry']['media$group']['media$description'];
        }
        if (isset($ytVideo['entry']['media$group']['yt$duration'])) {
            $ytVideo['entry']['duration'] = $ytVideo['entry']['media$group']['yt$duration'];
        }
        // sort thumbnails by size
        $thumbnails = $ytVideo['entry']['media$group']['media$thumbnail'];
        if ($thumbnails && is_array($thumbnails) && count($thumbnails) > 0) {
            usort($thumbnails, 'compare_thumbnail');
            $ytVideo['entry']['thumbnails'] = $thumbnails;
        }
        return $ytVideo['entry'];
    }

    function compare_thumbnail($thumb1, $thumb2) {
        return $thumb1['width'] - $thumb2['width'];
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

        $chMeta = json_decode(file_get_contents("http://$localhost/api/channels/$ch"), true);

        if ($ep) {
    
            if (preg_match('/^e(\\d+)$/', $ep, $matches)) {
    
                $meta = json_decode(file_get_contents("http://$localhost/api/episodes/$matches[1]"), true);
                if ($meta) {
                    if ($chMeta['sourceUrl']) { // YouTube sync
                        $programs = json_decode(file_get_contents("http://$localhost/api/episodes/$matches[1]/programs"), true);
                        if ($programs && is_array($programs) && count($programs) > 0) {
                            $videoId = substr($programs[0]['fileUrl'], 31);
                            $ytVideo = fetch_yt_video($videoId);
                            if ($ytVideo) {
                                if ($ytVideo['thumbnails']) {
                                    $thumb = array_pop($ytVideo['thumbnails']);
                                    $content = str_replace("{{meta_thumbnail}}", $thumb['url'], $content);
                                }
                                if ($ytVideo['title']) {
                                    $content = str_replace("{{meta_title}}", htmlsafe($ytVideo['title']['$t']), $content);
                                }
                                if ($ytVideo['description']) {
                                    $content = str_replace("{{meta_description}}", htmlsafe($ytVideo['description']['$t']), $content);
                                }
                                if (is_array($ytVideo['link']) && count($ytVideo['link']) > 0) {
                                    $content = str_replace("{{meta_yt_link}}", htmlsafe($ytVideo['link'][0]['href']), $content);
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
                            if (is_array($ytVideo['link']) && count($ytVideo['link']) > 0) {
                                $content = str_replace("{{meta_yt_link}}", htmlsafe($ytVideo['link'][0]['href']), $content);
                            }
                        }
                    }
                    $content = str_replace("{{meta_title}}", htmlsafe($meta['name']), $content);
                    $content = str_replace("{{meta_description}}", htmlsafe($meta['intro']), $content);
                    $content = str_replace("{{meta_thumbnail}}", htmlsafe($meta['imageUrl']), $content);
                    $content = str_replace("{{meta_url}}", "http://$host/view/p$ch/$ep", $content);
                }
            } else if (preg_match('/^(\\d+)$/', $ep, $matches)) {
    
                $ytProgram = json_decode(file_get_contents("http://$localhost/api/ytprograms/$matches[1]"), true);
                if ($ytProgram) {
                        
                    $ytVideo = fetch_yt_video($ytProgram['ytVideoId']);
                    if ($ytVideo) {
                        if (is_array($ytVideo['thumbnails']) && count($ytVideo['thumbnails']) > 0) {
                            $thumb = array_pop($ytVideo['thumbnails']);
                            $content = str_replace("{{meta_thumbnail}}", $thumb['url'], $content);
                        }
                        if ($ytVideo['title']) {
                            $content = str_replace("{{meta_title}}", htmlsafe($ytVideo['title']['$t']), $content);
                        }
                        if ($ytVideo['description']) {
                            $content = str_replace("{{meta_description}}", htmlsafe($ytVideo['description']['$t']), $content);
                        }
                        if (is_array($ytVideo['link']) && count($ytVideo['link']) > 0) {
                            $content = str_replace("{{meta_yt_link}}", htmlsafe($ytVideo['link'][0]['href']), $content);
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
                    $content = str_replace("{{meta_title}}", htmlsafe($ytVideo['title']['$t']), $content);
                    $content = str_replace("{{meta_description}}", htmlsafe($ytVideo['description']['$t']), $content);
                    $content = str_replace("{{meta_url}}", "http://$host/view/p$ch/$ep", $content);
//                    $content = str_replace("{{meta_type}}", "video.tv_show", $content);
//                    $content = str_replace("{{meta_video}}", htmlsafe("http://www.youtube.com/v/$matches[1]?version=3&autohide=1"), $content);
//                    $content = str_replace("{{meta_video_type}}", "application/x-shockwave-flash", $content);
//                    $content = str_replace("{{meta_video_width}}", "480", $content);
//                    $content = str_replace("{{meta_video_height}}", "360", $content);
//                    $content = str_replace("{{meta_video_duration}}", $ytVideo['duration']['seconds'], $content);
                    $content = str_replace("{{meta_yt_link}}", htmlsafe($ytVideo['link'][0]['href']), $content);
                }
            }
        } else if ($chMeta) {

            if (preg_match($ytChannelRegex, $chMeta['sourceUrl'], $matches)) {

                $data = json_decode(file_get_contents("$ytGdata/feeds/api/partners/$matches[1]/branding/default?$ytParam"), true);
                if ($data && $data['entry'] && $data['entry']['yt$option'] && is_array($data['entry']['yt$option'])) {
                    $ytOption = $data['entry']['yt$option'];
                    for ($i = 0; $i < count($ytOption); $i++) {
                        if ($ytOption[$i]['name'] == 'channel.banner.tv.low.image.url')
                            $content = str_replace('{{meta_thumbnail}}', $ytOption[$i]['$t'], $content);
                    }
                } else {
                    $data = json_decode(file_get_contents("$ytGdata/feeds/api/users/$matches[1]?$ytParam"), true);
                    $content = str_replace('{{meta_thumbnail}}', $data['media$thumbnail']['url'], $content);
                }

            } else if (preg_match($ytPlaylistRegex, $chMeta['sourceUrl'], $matches)) {

                $data = json_decode(file_get_contents("$ytGdata/feeds/api/playlists/$matches[1]?$ytParam"), true);
                if ($data && $data['feed'] && $data['feed']['media$group'] &&
                    $data['feed']['media$group']['media$thumbnail'] &&
                    is_array($data['feed']['media$group']['media$thumbnail']) &&
                    count($data['feed']['media$group']['media$thumbnail']) > 0) {
                    
                    $thumbnails = $data['feed']['media$group']['media$thumbnail'];
                    usort($thumbnails, 'compare_thumbnail');
                    $thumb = array_pop($thumbnails);
                    $content = str_replace('{{meta_thumbnail}}', $thum['url'], $content);
                }
            }
            $content = str_replace("{{meta_title}}", htmlsafe($chMeta['name']), $content);
            $content = str_replace("{{meta_description}}", htmlsafe($chMeta['intro']), $content);
            $content = str_replace("{{meta_thumbnail}}", htmlsafe($chMeta['imageUrl']), $content);
            $content = str_replace("{{meta_url}}", "http://$host/view/p$ch", $content);
        }
    }
    $mso = json_decode(file_get_contents("http://$localhost/api/mso/$msoName"), true);
    if ($mso == null) {
        // fallback
        $mso = json_decode(file_get_contents("http://$localhost/api/mso/9x9"), true);
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

