<?php

use Illuminate\Database\Seeder;

class UsersSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $array = [
            [
                'id' => 1,
                'name' => 'RoiSoleil',
                'firstname' => 'Louis I'
            ],
            [
                'id' => 2,
                'name' => 'RoiSoleil',
                'firstname' => 'Louis II'
            ],
            [
                'id' => 3,
                'name' => 'RoiSoleil',
                'firstname' => 'Louis III'
            ],
            [
                'id' => 4,
                'name' => 'RoiSoleil',
                'firstname' => 'Louis IV'
            ],
            [
                'id' => 5,
                'name' => 'RoiSoleil',
                'firstname' => 'Louis V'
            ],
        ];

        DB::table('clients')->insert(
            $array
        );

        DB::table('users')->insert(
            [
                "id" => 3,
                "name" => "admin",
                "email" => "admin@admin.re",
                "password" => bcrypt('admin'),
            ]
        );
    }
}
