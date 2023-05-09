<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class () extends Migration {
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('users', function (Blueprint $table) {
            $table->id('id');
            $table->string('first_name', 50);
            $table->string('last_name', 50);
            $table->string('email', 50)->unique();
            $table->string('password')->nullable();
            $table->string('phone',50)->nullable();
            $table->text('present_address')->nullable();
            $table->text('permanent_address')->nullable();
            $table->string('nid',50)->nullable();
            $table->string('nid_type',10)->nullable();
            $table->string('institution')->nullable();
            $table->string('company')->nullable();
            $table->boolean('status')->default(0);
            $table->index('email');
            $table->index('id');
            $table->rememberToken();
            $table->timestamps();
            $table->softDeletes();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('users');
    }
};
