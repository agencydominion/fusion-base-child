<?php

/**
 * Enqueue Scripts and Styles
 */

add_action( 'wp_enqueue_scripts', 'fsn_base_child_script_enqueue' );
function fsn_base_child_script_enqueue() {
    //replace Bootstrap with custom build
	wp_dequeue_style('bootstrap');
	wp_dequeue_script('bootstrap');
	wp_enqueue_style('bootstrap', trailingslashit( get_stylesheet_directory_uri() ) .'css/bootstrap.min.css', array(), '3.4.1');
	wp_enqueue_script('bootstrap', trailingslashit( get_stylesheet_directory_uri() ) .'js/bootstrap.min.js', array('jquery'), '3.4.1', true);
	//enqueue parent theme stylesheet
    wp_enqueue_style( 'fsn-base-parent', trailingslashit( get_template_directory_uri() ) . 'style.css', array('bootstrap') );
    //theme scripts and styles
	wp_enqueue_script( 'fsn-base-child', trailingslashit( get_stylesheet_directory_uri() ) . 'js/scripts.js', array('jquery'), '', true );
}
	
?>