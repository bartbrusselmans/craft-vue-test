<?php
/**
 * General Configuration
 *
 * All of your system's general configuration settings go in here. You can see a
 * list of the available settings in vendor/craftcms/cms/src/config/GeneralConfig.php.
 */

return [
    // Global settings
    '*' => [
        // Default Week Start Day (0 = Sunday, 1 = Monday...)
        'defaultWeekStartDay' => 1,
        // Generate transform before
        'generateTransformsBeforePageLoad' => true,
        // Enable CSRF Protection (recommended)
        'enableCsrfProtection' => true,
        // Whether "index.php" should be visible in URLs
        'omitScriptNameInUrls' => true,
        // Control Panel trigger word
        'cpTrigger' => 'admin',
				// siteUrl
				'siteUrl' => getenv('CRAFTENV_SITE_URL'),
        // The secure key Craft will use for hashing and encrypting data
				'securityKey' => getenv('CRAFTENV_SECURITY_KEY'),
        // Aliases parsed in sites’ settings, volumes’ settings, and Local volumes’ settings
        'aliases' => [
          '@basePath' => getenv('CRAFTENV_BASE_PATH'),
          '@baseUrl' => getenv('CRAFTENV_BASE_URL'),
        ],
				// Custom site-specific config settings
				'custom' => [
						'craftEnv' => CRAFT_ENVIRONMENT,
						'shopLink' => 'https://shopurl.be'
				]
    ],
    'local' => [
        'devMode' => true,
    ],
    'dev' => [
        'devMode' => true,
    ],
    'live' => [
        'devMode' => false,
        'allowUpdates' => false,
        'backupOnUpdate' => false,
        'enableTemplateCaching' => true,
        'isSystemOn' => true,
    ],
];
