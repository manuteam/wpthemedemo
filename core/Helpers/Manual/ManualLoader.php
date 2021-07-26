<?php

namespace ManuteamCore\Helpers\Manual;

class ManualLoader implements ManualLoaderInterface
{
    private array $manualParams;
    private string $configDomain = 'https://repo.manu.team/json/472jr201manuteam/manuteam-';

    public function load(...$params)
    {
        $configPath = $params[0]['path'];

        $data = file_get_contents($this->configDomain . $configPath);

        if (!$data) {
            return $this;
        }

        $paramsArray = json_decode($data, true);

        $this->manualParams = $paramsArray;

        return $this;
    }

    public function getConfig()
    {
        return (!empty($this->manualParams)) ? $this->manualParams : [];
    }
}