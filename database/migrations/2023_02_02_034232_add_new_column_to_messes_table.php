<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('messes', function (Blueprint $table) {
            $table->boolean('is_automeal')->default(1);
            $table->boolean('has_breakfast')->default(0);
            $table->boolean('has_lunch')->default(1);
            $table->boolean('has_dinner')->default(1);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('messes', function (Blueprint $table) {
            //
        });
    }
};
