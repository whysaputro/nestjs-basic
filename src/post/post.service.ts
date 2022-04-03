import { Model } from 'mongoose';
import { Inject, Injectable } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { Post } from './interfaces/post.interface';

@Injectable()
export class PostService {
  constructor(@Inject('POST_MODEL') private postModel: Model<Post>) {}

  async create(createPostDto: CreatePostDto): Promise<Post> {
    const createdPost = new this.postModel(createPostDto);
    return createdPost.save();
  }

  async findAll(): Promise<Post[]> {
    return this.postModel.find();
  }

  async findOne(id: string): Promise<Post> {
    return this.postModel.findById(id);
  }

  async update(id: string, updatePostDto: UpdatePostDto) {
    await this.postModel.findByIdAndUpdate(id, updatePostDto);

    return {
      status: 'OK',
      message: 'Post successfully updated',
    };
  }

  async remove(id: string) {
    await this.postModel.findByIdAndRemove(id);

    return {
      status: 'OK',
      message: 'Post successfully deleted',
    };
  }
}
