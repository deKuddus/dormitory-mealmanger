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
        Schema::table('dormitories', function (Blueprint $table) {
            $table->string('break_fast_close')->nullable();
            $table->string('lunch_close')->nullable();
            $table->string('dinner_close')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('dormitories', function (Blueprint $table) {
            $table->dropColumn('break_fast_close');
            $table->dropColumn('lunch_close');
            $table->dropColumn('dinner_close');
        });
    }
};
