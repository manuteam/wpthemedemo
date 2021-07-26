<?php

namespace ManuteamCore;

use ManuteamCore\WP\toFront\Enqueue;
use ManuteamCore\WP\API\Register;

class Manuteam
{
    public function __construct($dist = 'dev')
    {
        new Enqueue();
        new Register();
    }
}


