<?php
/**
 * Created by PhpStorm.
 * User: zhangyanpo
 * Date: 2016/4/8
 * Time: 13:18
 */
namespace Config;
class Db
{
    public static $db = array(
        'host'    => '127.0.0.1',
        'port'    => 3306,
        'user'    => 'root',
        'password' => 'root',
        'dbname'  => 'chat',
        'charset'    => 'utf8'
    );
}