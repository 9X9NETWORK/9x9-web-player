<?php

    $ytChannelRegex = "/^http:\\/\\/www\\.youtube\\.com\\/user\\/(.*)$/";
    $ytPlaylistRegex = "/^http:\\/\\/www\\.youtube\\.com\\/view_play_list\\?p=(.*)$/";
    $ytApiKey = "AI39si7lCrdz_clsMg5Ssip-jeguuZIZZ7Zev-pz35ay43sH2ApxagMgtUOa6j3kWpcOU-2P-ERJ44oLwRdbidDJJlPR2nKCGw";
    $ytGdata = "http://gdata.youtube.com";
    $ytParam = "v=2&alt=json&key=$ytApiKey";

    function compare_thumbnail($thumb1, $thumb2) {
        return $thumb1['width'] - $thumb2['width'];
    }

    function htmlsafe($str) {

        if ($str)
            return htmlspecialchars($str);
        else
            return '&nbsp;';
    }

    $host = $_SERVER['HTTP_HOST'];
    $localhost = "localhost:8080";
    list($msoName, $remain) = explode('.', $host, 2);

    $content = file_get_contents(__DIR__ . '/index.html');

    $ch = isset($_GET['ch']) ? $_GET['ch'] : null;
    $ep = isset($_GET['ep']) ? $_GET['ep'] : null;

    if ($ch && preg_match('/^\\d+$/', $ch)) {

        if ($ep) {
    
            if (preg_match('/^e(\\d+)$/', $ep, $matches)) {
    
                $meta = json_decode(file_get_contents("http://$localhost/api/episodes/$matches[1]"), true);
                if ($meta) {
                    $content = str_replace("{{meta_title}}", htmlsafe($meta['name']), $content);
                    $content = str_replace("{{meta_description}}", htmlsafe($meta['intro']), $content);
                    $content = str_replace("{{meta_thumbnail}}", htmlsafe($meta['imageUrl']), $content);
                    $content = str_replace("{{meta_url}}", "http://$host/web/p$ch/$ep", $content);
                }
    
            } else if (preg_match('/^(\\d+)$/', $ep, $matches)) {
    
                $meta = json_decode(file_get_contents("http://$localhost/api/programs/$matches[1]"), true);
                if ($meta) {
                    $content = str_replace("{{meta_title}}", htmlsafe($meta['name']), $content);
                    $content = str_replace("{{meta_description}}", htmlsafe($meta['intro']), $content);
                    $content = str_replace("{{meta_thumbnail}}", htmlsafe($meta['imageUrl']), $content);
                    $content = str_replace("{{meta_url}}", "http://$host/web/p$ch/$ep", $content);
                }
    
            } else if (preg_match("/^yt(\\w+)$/", $ep, $matches)) {
    
                $meta = json_decode(file_get_contents("$ytGdata/feeds/api/videos/$matches[1]?$ytParam"), true);
                if ($meta && $meta['data']) {
                    $data = $meta['data'];
                    $content = str_replace("{{meta_title}}", htmlsafe($data['title']), $content);
                    $content = str_replace("{{meta_description}}", htmlsafe($data['description']), $content);
                    $content = str_replace("{{meta_thumbnail}}", htmlsafe($data['thumbnail']['hqDefault']), $content);
                    $content = str_replace("{{meta_url}}", "http://$host/web/p$ch/$ep", $content);
                    $content = str_replace("{{meta_type}}", "video", $content);
                    $content = str_replace("{{meta_video}}", htmlsafe("http://www.youtube.com/v/$matches[1]?version=3&autohide=1"), $content);
                    $content = str_replace("{{meta_video_type}}", "application/x-shockwave-flash", $content);
                    $content = str_replace("{{meta_video_width}}", "480", $content);
                    $content = str_replace("{{meta_video_height}}", "360", $content);
                }
            }

        } else {

            $meta = json_decode(file_get_contents("http://$localhost/api/channels/$ch"), true);
            if ($meta) {

                if (preg_match($ytChannelRegex, $meta['sourceUrl'], $matches)) {

                    $data = json_decode(file_get_contents("$ytGdata/feeds/api/partners/$matches[1]/branding/default?$ytParam"), true);
                    if ($data && $data['entry'] && $data['entry']['yt$option'] && is_array($data['entry']['yt$option'])) {
                        $ytOption = $data['entry']['yt$option'];
                        for (int $i = 0; $i < count($ytOption); $i++) {
                            if ($ytOption[$i] == 'channel.banner.tv.low.image.url')
                                $content = str_replace('{{meta_thumbnail}}', $ytOption[$i]['$t'], $content);
                        }
                    } else {
                        $data = json_decode(file_get_contents("$ytGdata/feeds/api/users/$matches[1]?$ytParam"), true);
                        $content = str_replace('{{meta_thumbnail}}', $data['media$thumbnail']['url'], $content);
                    }

                } else if (preg_match($ytPlaylistRegex, $meta['sourceUrl'], $matches)) {

                    $data = json_decode(file_get_contents("$ytGdata/feeds/api/playlists/$matches[1]?$ytParam"), true);
                    if ($data && $data['feed'] && $data['feed']['media$group']['media$thumbnail'] &&
                        is_array($data['feed']['media$group']['media$thumbnail'])) {
                        
                        $thumbnails = $data['feed']['media$group']['media$thumbnail'];
                        usort($thumbnails, 'compare_thumbnail');
                        $content = str_replace('{{meta_thumbnail}}', array_pop($thumbnails)['url'], $content);
                    }

                }

                $content = str_replace("{{meta_title}}", htmlsafe($meta['name']), $content);
                $content = str_replace("{{meta_description}}", htmlsafe($meta['intro']), $content);
                $content = str_replace("{{meta_thumbnail}}", htmlsafe($meta['imageUrl']), $content);
                $content = str_replace("{{meta_url}}", "http://$host/web/$ch", $content);
            }
        }
    }

    $mso = json_decode(file_get_contents("http://$localhost/api/mso/$msoName"), true);
    if ($mso == null) {
        $mso = json_decode(file_get_contents("http://$localhost/api/mso/9x9"), true);
    }
    if ($mso['title']) $content = str_replace("{{meta_title}}", htmlsafe($mso['title']), $content);
    if ($mso['intro']) $content = str_replace("{{meta_description}}", htmlsafe($mso['intro']), $content);
    if ($mso['logoUrl']) $content = str_replace("{{meta_thumbnail}}", htmlsafe($mso['logoUrl']), $content);
    if ($mso['keyword']) $content = str_replace("{{meta_keyword}}", htmlsafe($mso['keyword']), $content);
    $content = str_replace("{{favicon}}", ($mso['jingleUrl'] ? "<link rel='shortcut icon' href='${mso['jingleUrl']}' type='image/x-icon'/>" : ""), $content);

    $content = str_replace("{{meta_title}}", htmlsafe("9x9 flirp landing page"), $content);
    $content = str_replace("{{meta_description}}", htmlsafe(null), $content);
    $content = str_replace("{{meta_thumbnail}}", htmlsafe(null), $content);
    $content = str_replace("{{meta_url}}", "http://$host/web/", $content);
    $content = str_replace("{{meta_type}}", "web", $content);
    $content = str_replace("{{meta_video}}", "", $content);
    $content = str_replace("{{meta_video_type}}", "", $content);
    $content = str_replace("{{meta_video_width}}", "", $content);
    $content = str_replace("{{meta_video_height}}", "", $content);
    $content = str_replace("{{meta_site_name}}", $host, $content);
    $content = str_replace("{{meta_keyword}}", "", $content);

    header('Content-Type: text/html');
    header('Content-Length: ' . strlen($content));
    
    echo $content;

