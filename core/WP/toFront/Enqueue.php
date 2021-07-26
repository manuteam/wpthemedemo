<?php

namespace ManuteamCore\WP\toFront;

use ManuteamCore\Helpers\Config\ConfigurationLoader;

class Enqueue
{
    protected $Config;

    public function __construct()
    {
        $this->plugin_folder_name = basename( plugin_dir_path(  dirname( __FILE__ , 2 ) ) );
        $configLoader = new ConfigurationLoader();
        $this->Config = $configLoader->load()->getConfig();

        add_action('wp_enqueue_scripts', [$this, 'manuScripts']);
    }

    /**
     * Include scripts and css styles
     */
    public function manuScripts()
    {
        $theme = wp_get_theme();
        $asset_file = include( get_template_directory() . '/build/index.asset.php');

        wp_enqueue_style( 'main-style-dist', get_template_directory_uri() . '/build/editor.css', '', $theme->get( 'Version' ));
        wp_enqueue_style( 'main-style', get_template_directory_uri() . '/style.css' );

        wp_enqueue_script( 'scrollmagic', '//cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.5/ScrollMagic.min.js' , array( 'jquery' ), '1.0', false );
        wp_enqueue_script( 'main-script', get_template_directory_uri() . '/build/index.js' , $asset_file['dependencies'], $asset_file['version'], true );
        wp_enqueue_script( 'addons-script', get_template_directory_uri() . '/build/addons.js' , 'jQuery', $asset_file['version'], true );

        $url = trailingslashit( home_url() );
        $path = trailingslashit( parse_url( $url, PHP_URL_PATH ) );

        wp_scripts()->add_data( 'main-script', 'data', sprintf( 'var rootSettings = %s;', wp_json_encode( array(
            'title' => get_bloginfo( 'name', 'display' ),
            'path' => $path,
            'loadGif' => get_template_directory_uri() . '/dist/images/loading-icon.gif',
            'URL' => array(
                'api' => esc_url_raw( get_rest_url( null, '/wp/v2/' ) ),
                'root' => esc_url_raw( $url ),
                'build' => get_template_directory_uri() . '/src/',
            ),
        ) ) ) );

    }

    private function getApiEndpoints()
    {
        try {
            $domain_url = $this->Config['service_url'];
            $endpoints = $this->Config['endpoints'];

            $result = [];
            foreach ($endpoints as $key => $endpoint) {
                $result[$key] = $domain_url . $endpoint;
            }
            return $result;
        } catch (\Exception $exception)  {
            return $exception->getMessage();
        }
    }
}