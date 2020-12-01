<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;
use App\Models\Post;
use App\Models\PostTag;

class PostController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $allPosts = DB::table('posts')
                    ->join('categories', 'categories.id', '=', 'posts.categoryId')
                    ->select('posts.*', 'categories.title as categoryName')
                    ->get();
        if ($allPosts->isNotEmpty()) {
            foreach ($allPosts as $item){
                $eachPostTags = DB::table('post_tags')->where('post_tags.postId', '=', $item->id)->get();
                $item->tags = $eachPostTags->toArray();
            }
        }

        return response()->json($allPosts, 200);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create(Request $request)
    {
        DB::beginTransaction();
        try {
            
            Log::info('api/blog/post::post --> : '.$request->userId);
            Log::info('api/blog/post::post --> : '.$request->title);
            Log::info('api/blog/post::post --> : '.$request->desc);
            Log::info('api/blog/post::post --> : '.$request->content);
            $post = new Post;
            $post->authorId = $request->userId;
            $post->parentId = 0;
            $post->categoryId = $request->category;
            $post->title = $request->title;
            $post->metaTitle = $request->desc;
            $post->summary = $request->desc;
            $post->content = $request->content;
            $post->published = false;
            $post->save();
            
            $postTagList = $request->input('tags');
            foreach ($postTagList as $item){
                Log::info('api/blog/post::tag->id --> : '.$post->id);
                Log::info('api/blog/post::tag->name --> : '.$item['name']);
                Log::info('api/blog/post::tag->name --> : '.$item['color']);
                $postTag = new PostTag;
                $postTag->postId = $post->id;
                $postTag->name = $item['name'];
                $postTag->color = $item['color'];
                $postTag->save();
            }

            DB::commit();
        } catch (Exception $e) {
            Log::error('api/blog/post::Exception --> : '.$e);
            DB::rollback();
        }
        return response()->json(array('post'=>$post), 200);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        DB::beginTransaction();
        try {
            Log::info('api/blog/post::PUT->id --> : '.$id);
            $post = Post::find($id);
            $post->categoryId = $request->category;
            $post->title = $request->title;
            $post->metaTitle = $request->desc;
            $post->summary = $request->desc;
            $post->content = $request->content;
            $post->save();

            DB::table('post_tags')->where('post_tags.postId', '=', $id)->delete();

            $postTagList = $request->input('tags');
            foreach ($postTagList as $item){
                Log::info('api/blog/post::tag->id --> : '.$post->id);
                Log::info('api/blog/post::tag->name --> : '.$item['name']);
                Log::info('api/blog/post::tag->name --> : '.$item['color']);
                $postTag = new PostTag;
                $postTag->postId = $post->id;
                $postTag->name = $item['name'];
                $postTag->color = $item['color'];
                $postTag->save();
            }

            DB::commit();
        } catch (Exception $e) {
            Log::error('api/blog/post::Exception --> : '.$e);
            DB::rollback();
        }
        return response()->json($post, 200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
