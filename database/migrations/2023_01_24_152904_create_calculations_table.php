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
        Schema::create('calculations', function (Blueprint $table) {
            $table->id();
            $table->foreignId('dormitory_id')->constrained();
            $table->foreignId('user_id')->constrained();
            $table->float('amount')->default(0);
            $table->dateTime('calculate_date');
            $table->string('description')->nullable();
            $table->decimal('carry')->nullable();
            $table->boolean('status')->default(0);
            $table->float('total_meal')->nullable();
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
        Schema::dropIfExists('calculations');
    }
};
