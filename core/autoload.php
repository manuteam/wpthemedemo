<?php
/**
 * Autoload MANU:TEAM namespace
 * @param $className
 */

function MNCoreLoadClass($className)
{
    $path = MANUTEAM_CORE . str_replace('\\', '/', substr($className, 12)) . '.php';

    if (file_exists($path)) {
        require $path;
    }
}

spl_autoload_register('MNCoreLoadClass', true);