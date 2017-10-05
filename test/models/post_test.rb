require 'test_helper'

class PostTest < ActiveSupport::TestCase

  test "can create a post" do
    @post = Post.create
    assert @post
  end
end
