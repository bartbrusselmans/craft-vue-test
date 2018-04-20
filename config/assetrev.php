<?php

return array(
  '*' => array(
    'manifestPath' => BASEPATH . 'public_html/assets/dist/manifest.json',
    'assetsBasePath' => '../public_html/assets/dist/',
    'assetUrlPrefix' => '/assets/dist/'
  ),
  'local' => array(
    'pipeline' => 'passthrough',
  ),
  'dev' => array(
    'pipeline' => 'manifest|querystring|passthrough',
  ),
  'live' =>  array(
    'pipeline' => 'manifest|querystring|passthrough',
  )
);
