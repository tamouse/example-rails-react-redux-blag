class Api::V1::PostsController < Api::V1::BaseController
  before_action :find_post, only: [:show, :update, :destroy]

  def index
    @posts = Post.all.order(created_at: :desc)
    render json: {posts: @posts}
  end

  def show
    render json: {post: @post}
  end

  def create
    if @post = Post.create(create_params)
      render json: {post: @post}
    else
      render json: {errors: post.errors.full_messages}, status: :unprocessable_entity
    end
  end

  def update
    if @post.update_attributes(update_params)
      render json: {post: @post}
    else
      render json: {errors: @post.errors.full_messages}, status: :unprocessable_entity
    end
  end

  def destroy
    if @post.destroy
      head :ok
    else
      render json: {errors: @post.errors.full_messages}, status: :unprocessable_entity
    end
  end

  private

  def find_post
    @post = Post.find_by(id: params[:id])
  end

  def create_params
    params.require(:post).permit(:title, :body)
  end

  def update_params
    params.require(:post).permit(:title, :body)
  end

end
