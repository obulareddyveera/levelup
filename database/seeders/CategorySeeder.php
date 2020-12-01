<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Carbon\Carbon;

class CategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('categories')->insert([
            'parentId' => 0,
            'title' => 'CSS3',
            'metaTitle' => 'CSS3',
            "created_at" => Carbon::now(),
            "updated_at" => Carbon::now()
        ]);
        DB::table('categories')->insert([
            'parentId' => 0,
            'title' => 'HTML5',
            'metaTitle' => 'HTML5',
            "created_at" => Carbon::now(),
            "updated_at" => Carbon::now()
        ]);
        DB::table('categories')->insert([
            'parentId' => 0,
            'title' => 'Javascript',
            'metaTitle' => 'Javascript',
            "created_at" => Carbon::now(),
            "updated_at" => Carbon::now()
        ]);
        DB::table('categories')->insert([
            'parentId' => 3,
            'title' => 'React.js',
            'metaTitle' => 'React.js',
            "created_at" => Carbon::now(),
            "updated_at" => Carbon::now()
        ]);
        DB::table('categories')->insert([
            'parentId' => 3,
            'title' => 'Redux',
            'metaTitle' => 'Redux',
            "created_at" => Carbon::now(),
            "updated_at" => Carbon::now()
        ]);
        DB::table('categories')->insert([
            'parentId' => 0,
            'title' => 'Java',
            'metaTitle' => 'Java',
            "created_at" => Carbon::now(),
            "updated_at" => Carbon::now()
        ]);
        DB::table('categories')->insert([
            'parentId' => 6,
            'title' => 'Spring-Boot',
            'metaTitle' => 'Spring-Boot',
            "created_at" => Carbon::now(),
            "updated_at" => Carbon::now()
        ]);
        DB::table('categories')->insert([
            'parentId' => 6,
            'title' => 'JPA',
            'metaTitle' => 'JPA',
            "created_at" => Carbon::now(),
            "updated_at" => Carbon::now()
        ]);
    }
}
