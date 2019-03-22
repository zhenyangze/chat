<?php
return array(
    'URL_HTML_SUFFIX' => '',
	'MODULE_ALLOW_LIST'    =>    array('Manage','Client','Chat','Home'),
	'DEFAULT_MODULE'       =>    'Home',
	'URL_MODEL'          => '2',

	'OFFICIAL_WEBSITE' => 'localhost',
	//安全过滤
    'DEFAULT_FILTER' => 'strip_tags,htmlspecialchars,magicAddslashes,trim',
    //数据库连接
    'DB_TYPE'               =>  'mysql',     // 数据库类型
    'DB_HOST'               =>  '127.0.0.1', // 服务器地址
    'DB_NAME'               =>  'chat',          // 数据库名
    'DB_USER'               =>  'root',      // 用户名
    'DB_PWD'                =>  'root',          // 密码
    'DB_PORT'               =>  '3306',        // 端口 
    'DB_PREFIX'             =>  'we_',    // 数据库表前缀
    'DB_FIELDS_CACHE'       =>  true,        // 启用字段缓存
    'DB_CHARSET'            =>  'utf8',      // 数据库编码默认采用utf

);