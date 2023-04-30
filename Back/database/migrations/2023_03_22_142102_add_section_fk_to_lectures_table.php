<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::table('lectures', function (Blueprint $table) {
            $table->foreignId('section_id')
                ->constrained()
                ->onDelete('cascade')
                ->onUpdate('cascade')
                ->after('order');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        if (Schema::hasTable('lectures')) {
            Schema::table('lectures', function (Blueprint $table) {
                $table->dropForeign(['section_id']);
            });
        }
    }
};
