<?php

    function htmlsafe($str) {

        if ($str)
            return htmlspecialchars($str);
        else
            return '&nbsp;';
    }

    $host = $_SERVER['HTTP_HOST'];

    $content = file_get_contents(__DIR__ . '/index.html');

    $ch = isset($_GET['ch']) ? $_GET['ch'] : null;
    $ep = isset($_GET['ep']) ? $_GET['ep'] : null;

    if ($ep) {

        if (preg_match('/^e(\\d+)$/', $ep, $matches)) {

            $meta = json_decode(file_get_contents("http://$host/api/episodes/$matches[1]"), true);
            if ($meta) {
                $content = str_replace("{{title}}", htmlsafe($meta['name']), $content);
                $content = str_replace("{{description}}", htmlsafe($meta['intro']), $content);
                $content = str_replace("{{image}}", htmlsafe($meta['imageUrl']), $content);
                $content = str_replace("{{url}}", "http://$host/web/p$ch/$ep", $content);
            }

        } else if (preg_match('/^(\\d+)$/', $ep, $matches)) {

            $meta = json_decode(file_get_contents("http://$host/api/programs/$matches[1]"), true);
            if ($meta) {
                $content = str_replace("{{title}}", htmlsafe($meta['name']), $content);
                $content = str_replace("{{description}}", htmlsafe($meta['intro']), $content);
                $content = str_replace("{{image}}", htmlsafe($meta['imageUrl']), $content);
                $content = str_replace("{{url}}", "http://$host/web/p$ch/$ep", $content);
            }

        } else if (preg_match($ep, "/^yt(.*)$/", $matches)) {

            $meta = json_decode(file_get_contents("http://gdata.youtube.com/feeds/api/videos/$matches[1]?alt=jsonc&v=2"), true);
            if ($meta && $meta['data']) {
                $data = $meta['data'];
                $content = str_replace("{{title}}", htmlsafe($data['title']), $content);
                $content = str_replace("{{description}}", htmlsafe($data['description']), $content);
                $content = str_replace("{{image}}", htmlsafe($meta['thumbnail']['hqDefault']), $content);
                $content = str_replace("{{url}}", "http://$host/web/p$ch/$ep", $content);
                $content = str_replace("{{type}}", "video", $content);
                $content = str_replace("{{video}}", htmlsafe("http://www.youtube.com/v/$matches[1]?version=3&autohide=1"), $content);
                $content = str_replace("{{video_type}}", "application/x-shockwave-flash", $content);
                $content = str_replace("{{video_width}}", "480", $content);
                $content = str_replace("{{video_height}}", "360", $content);
            }
        }
    }

    if ($ch && preg_match('/^\\d+$/', $ch)) {

        $meta = json_decode(file_get_contents("http://$host/api/channels/$ch"), true);
        if ($meta) {
            $content = str_replace("{{title}}", htmlsafe($meta['name']), $content);
            $content = str_replace("{{description}}", htmlsafe($meta['intro']), $content);
            $content = str_replace("{{image}}", htmlsafe($meta['imageUrl']), $content);
            $content = str_replace("{{url}}", "http://$host/web/$ch", $content);
        }
    }

    $content = str_replace("{{title}}", htmlsafe("9x9 flirp landing page"), $content);
    $content = str_replace("{{description}}", htmlsafe(""), $content);
    $content = str_replace("{{image}}", htmlsafe(""), $content);
    $content = str_replace("{{url}}", "http://$host/web/", $content);
    $content = str_replace("{{type}}", "web", $content);
    $content = str_replace("{{video}}", ""), $content);
    $content = str_replace("{{video_type}}", "", $content);
    $content = str_replace("{{video_width}}", "", $content);
    $content = str_replace("{{video_height}}", "", $content);

    header('Content-Type: text/html');
    header('Content-Length: ' . strlen($content));
    
    echo $content;

