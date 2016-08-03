<?php

/**
 * Enqueue Scripts and Styles
 */

add_action( 'wp_enqueue_scripts', 'fsn_base_child_script_enqueue' );
function fsn_base_child_script_enqueue() {
	//enqueue parent theme stylesheet
    wp_enqueue_style( 'fsn-base-parent', trailingslashit( get_template_directory_uri() ) . 'style.css', array('bootstrap') );
}
	
?>