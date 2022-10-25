<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInitff313ee14f5a352049918017a1630a50
{
    public static $prefixLengthsPsr4 = array (
        'P' => 
        array (
            'PHPMailer\\PHPMailer\\' => 20,
        ),
    );

    public static $prefixDirsPsr4 = array (
        'PHPMailer\\PHPMailer\\' => 
        array (
            0 => __DIR__ . '/..' . '/phpmailer/phpmailer/src',
        ),
    );

    public static $classMap = array (
        'Composer\\InstalledVersions' => __DIR__ . '/..' . '/composer/InstalledVersions.php',
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->prefixLengthsPsr4 = ComposerStaticInitff313ee14f5a352049918017a1630a50::$prefixLengthsPsr4;
            $loader->prefixDirsPsr4 = ComposerStaticInitff313ee14f5a352049918017a1630a50::$prefixDirsPsr4;
            $loader->classMap = ComposerStaticInitff313ee14f5a352049918017a1630a50::$classMap;

        }, null, ClassLoader::class);
    }
}
