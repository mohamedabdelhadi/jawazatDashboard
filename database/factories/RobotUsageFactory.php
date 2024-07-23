<?php

namespace Database\Factories;

use App\Models\RobotUsage;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\RobotUsage>
 */
class RobotUsageFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    protected $model = RobotUsage::class;
    public function definition(): array
    {
        $column1Values = ['ask_me', 'sugg_comp', 'survey', 'procedures', 'support'];
        $column2Values = ['ar', 'en', 'fr', 'zh'];
        return [
           'name'=>$this->faker->randomElement($column1Values),
           'lang'=>$this->faker->randomElement($column2Values),
           'created_at' => $this->faker->dateTimeBetween('-1 year', 'now')
        ];
    }
}
