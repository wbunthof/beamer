<?php

use App\Sponsor;
use Illuminate\Database\Seeder;
use Illuminate\Support\Str;

class SponsorTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // how many articles you want
        $amount = 5;

        for ($i = 0; $i < $amount; $i++){
            $instance = new Sponsor();

            $instance->title = Str::random(8) . '___' . $i;
            $instance->content = Str::random(8) . '___' . $i;

            $instance->save();
        }
    }
}
