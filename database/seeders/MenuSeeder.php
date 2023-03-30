<?php

namespace Database\Seeders;

use App\Enums\DormitoryIdStatic;
use App\Models\Menu;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class MenuSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $menu = array(
            array('menu_date' => 'Monday',
                'break_fast' => 'Cereal, Milk, Banana',
                'lunch' => 'Sandwich, Chips, Fruit',
                'dinner' => 'Chicken, Rice, Vegetables',
                'created_at' => '2023-03-04 10:30:00',
                'updated_at' => '2023-03-04 14:45:00',
                'dormitory_id' => DormitoryIdStatic::DORMITORYID,
            ),
            array('menu_date' => 'Tuesday',
                'break_fast' => 'Oatmeal, Berries, Yogurt',
                'lunch' => 'Soup, Salad, Bread',
                'dinner' => 'Pasta, Tomato Sauce, Meatballs',
                'created_at' => '2023-03-04 09:15:00',
                'updated_at' => '2023-03-04 11:30:00',
                'dormitory_id' => DormitoryIdStatic::DORMITORYID,
            ),
            array('menu_date' => 'Wednesday',
                'break_fast' => 'Eggs, Toast, Bacon',
                'lunch' => 'Quesadilla, Salsa, Guacamole',
                'dinner' => 'Fish, Potatoes, Green Beans',
                'created_at' => '2023-03-04 11:00:00',
                'updated_at' => '2023-03-04 15:15:00',
                'dormitory_id' => DormitoryIdStatic::DORMITORYID,
            ),
            array('menu_date' => 'Thursday',
                'break_fast' => 'Pancakes, Syrup, Fruit',
                'lunch' => 'Pizza, Veggies, Dip',
                'dinner' => 'Beef, Noodles, Broccoli',
                'created_at' => '2023-03-04 08:45:00',
                'updated_at' => '2023-03-04 13:00:00',
                'dormitory_id' => DormitoryIdStatic::DORMITORYID,
            ),
            array('menu_date' => 'Friday',
                'break_fast' => 'French Toast, Fruit, Yogurt',
                'lunch' => 'Burger, Fries, Coleslaw',
                'dinner' => 'Pork, Rice, Stir-Fry Vegetables',
                'created_at' => '2023-03-04 07:30:00',
                'updated_at' => '2023-03-04 10:45:00',
                'dormitory_id' => DormitoryIdStatic::DORMITORYID,
            ),
            array('menu_date' => 'Saturday',
                'break_fast' => 'Bagel, Cream Cheese, Smoked Salmon',
                'lunch' => 'Wrap, Chips, Fruit',
                'dinner' => 'Beef, Potatoes, Carrots',
                'created_at' => '2023-03-04 12:00:00',
                'updated_at' => '2023-03-04 16:15:00',
                'dormitory_id' => DormitoryIdStatic::DORMITORYID,
            ),
            array('menu_date' => 'Sunday',
                'break_fast' => 'Waffles, Syrup, Fruit',
                'lunch' => 'Taco Salad, Chips, Salsa',
                'dinner' => 'Roast Chicken, Mashed Potatoes, Green Beans',
                'created_at' => '2023-03-04 06:15:00',
                'updated_at' => '2023-03-04 09:30:00',
                'dormitory_id' => DormitoryIdStatic::DORMITORYID,
            )
        );

        Menu::insert($menu);
    }
}
