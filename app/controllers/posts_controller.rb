class PostsController < ApplicationController
  before_action :find_post, only: [:show, :update, :destroy]

  def index
    render json: Post.all
  end

  def show
    render json: @post
  end

  def create
    if post = Post.create(create_params)
      head :ok
    else
      render json: {errors: post.errors.full_messages}, status: :unprocessable_entity
    end
  end

  def update
    if @post.update_attributes(update_params)
      head :ok
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
