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
				// The highest number Craft will tack onto a slug in order to make it unique before giving up and throwing an error.
				'maxSlugIncrement' => 1000,
        // Enable CSRF Protection (recommended)
        'enableCsrfProtection' => true,
        // Whether "index.php" should be visible in URLs
        'omitScriptNameInUrls' => true,
				// The maximum amount of memory Craft will try to reserve during memory intensive operations such as zipping, unzipping and updating.
				'phpMaxMemoryLimit' => '512M',
				// any uploaded file names will have multi-byte characters (Chinese, Japanese, etc.) stripped and any high-ASCII characters converted to their low ASCII counterparts (i.e. ñ → n).
				'convertFilenamesToAscii' => true,
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
