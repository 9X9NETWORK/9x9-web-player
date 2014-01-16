<?php

    function htmlsafe($str) {

        if ($str)
            return htmlspecialchars($str);
        else
            return '&nbsp;';
    }

    $host = $_SERVER['HTTP_HOST'];
    $localhost = "localhost:8080";
    list($mso, $remain) = explode('.', $host, 2);

    $content = file_get_contents(__DIR__ . '/index.html');

    $ch = isset($_GET['ch']) ? $_GET['ch'] : null;
    $ep = isset($_GET['ep']) ? $_GET['ep'] : null;

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

            $meta = json_decode(file_get_contents("http://gdata.youtube.com/feeds/api/videos/$matches[1]?alt=jsonc&v=2"), true);
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
    }

    if ($ch && preg_match('/^\\d+$/', $ch)) {

        $meta = json_decode(file_get_contents("http://$localhost/api/channels/$ch"), true);
        if ($meta) {
            $content = str_replace("{{meta_title}}", htmlsafe($meta['name']), $content);
            $content = str_replace("{{meta_description}}", htmlsafe($meta['intro']), $content);
            $content = str_replace("{{meta_thumbnail}}", htmlsafe($meta['imageUrl']), $content);
            $content = str_replace("{{meta_url}}", "http://$host/web/$ch", $content);
        }
    }

    $msoInfo = json_decode(file_get_contents("http://$localhost/api/mso/$mso"), true);
    $meta = $msoInfo['meta'];
    if (isset($meta['meta-title'])) $content = str_replace("{{meta_title}}", htmlsafe($meta['meta-title']), $content);
    if (isset($meta['meta-description'])) $content = str_replace("{{meta_description}}", htmlsafe($meta['meta-description']), $content);
    if (isset($meta['meta-thumbnail'])) $content = str_replace("{{meta_thumbnail}}", htmlsafe($meta['meta-thumbnail']), $content);
    if (isset($meta['meta-keyword'])) $content = str_replace("{{meta_keyword}}", htmlsafe($meta['meta-keyword']), $content);
    $content = str_replace("{{favicon}}", isset($meta['favicon-url']) ? "<link rel='shortcut icon' href='${meta['favicon-url']}' type='image/x-icon'/>" : "", $content);

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

