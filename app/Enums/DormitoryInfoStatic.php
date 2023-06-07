<?php

namespace App\Enums;

class DormitoryInfoStatic
{
    const DORMITORYID = 1;

    public function getMonth()
    {
        return now()->subMonth();
//        return now();

    }

}
