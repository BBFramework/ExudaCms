/**
 *============================================================================
 * Welcome to Exuda Cms, A Nodejs-Expressjs content management system. 
 * It's trying instance new a web enviroment that use create some wonderful 
 * applications.
 *
 * Owner: Bapquad Games. 
 * Author: Cuong.H.Vu 
 * Copyright (c) 2019. Bapquad Games. 
 *
 * File: ./controllers/loginController.js
 *============================================================================
 */

/**
 * Defines the index action.
 */
exports.index = ( req, res, next ) => 
{
	return res.redirect( '/' );
};