<?php
// Works on GoDaddy cPanel (Linux) shared hosting. Change $to before deploying.
$to = 'info@mnmcapartners.com';
header('Content-Type: application/json');
$d = json_decode(file_get_contents('php://input'), true) ?: [];
$clean = fn($k) => trim(strip_tags($d[$k] ?? ''));
$name = $clean('name'); $email = filter_var($d['email'] ?? '', FILTER_VALIDATE_EMAIL);
if (!$name || !$email || !empty($d['website'])) { http_response_code(400); echo '{"ok":false}'; exit; }
$type = $clean('type') ?: 'Contact';
$body = "Type: $type\nName: $name\nEmail: $email\nPhone: ".$clean('phone')."\n\n".$clean('message');
$ok = mail($to, "Website enquiry ($type)", $body, "From: no-reply@".$_SERVER['HTTP_HOST']."\r\nReply-To: $email");
echo json_encode(['ok' => $ok]);
