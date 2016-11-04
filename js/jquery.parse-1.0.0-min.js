/*
 * jQuery.Parse - Simple string evaluation
 * Copyright (c) 2007-2009 Ariel Flesler - aflesler(at)gmail(dot)com | http://flesler.blogspot.com
 * Dual licensed under MIT and GPL.
 * Date: 12/07/2009
 *
 * @author Ariel Flesler
 * @version 1.0.0
 *
 * @id jQuery.parse
 * @param {String} token The string to evaluate.
 * @return {String, Number, Boolean} The parsed data.
 */
jQuery.parse=function(b){if(b){var a=+b}if(!isNaN(a)){return a}if(b==="true"){return true}if(b==="false"){return false}return b};