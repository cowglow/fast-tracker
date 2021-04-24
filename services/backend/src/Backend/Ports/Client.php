<?php
namespace Cowglow\Backend;

/**
 * Class Client
 * @package Cowglow\Backend\Client
 */
class Client
{
    protected $secret;
    public function __construct($secret)
    {
        $this->secret = $secret;
    }

    public function Render()
    {
        return ["foo" => "bar", "secret" => $this->secret];
    }
}
