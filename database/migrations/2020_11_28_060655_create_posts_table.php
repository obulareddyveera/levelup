<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePostsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('posts', function (Blueprint $table) {
            $table->id();
            $table->bigInteger('authorId')->nullable();
            $table->bigInteger('parentId')->nullable();
            $table->bigInteger('categoryId')->nullable();
            $table->string('title')->nullable();
            $table->string('metaTitle');
            $table->string('summary');
            $table->text('content')->nullable();
            $table->tinyInteger('published')->nullable();
            $table->date('publishedAt')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('posts');
    }
}
