<?php

namespace ManuteamCore\WP\API;

class Register
{
    public function __construct()
    {
        add_action( 'rest_api_init', [$this, 'registerFields'] );
    }

    public function registerFields()
    {
        register_rest_field( 'post',
            'featured_image_src',
            array(
                'get_callback'		=> [$this, 'getImageSrc'],
                'update_callback'	=> null,
                'schema'			=> null
            )
        );
    }

    public function getImageSrc( $object, $field_name, $request )
    {
        if($object[ 'featured_media' ] == 0) {
            return $object[ 'featured_media' ];
        }
        $feat_img_array = wp_get_attachment_image_src( $object[ 'featured_media' ], 'thumbnail', true );
        return $feat_img_array[0];
    }
}