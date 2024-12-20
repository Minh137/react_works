package com.minh137.minh137.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.minh137.minh137.entity.Post;
import com.minh137.minh137.entity.PostFile;
import com.minh137.minh137.repository.PostFileRepository;
import com.minh137.minh137.repository.PostRepository;

@Service
public class PostService {

   @Autowired 
   private PostRepository postRepository;

   @Autowired
   private PostFileRepository postFileRepository;

   //crud를 맹글자!!!
   public List<Post> getAllPosts(){
       List<Post> posts = postRepository.findAll();
       posts.forEach(post-> {
           Optional<PostFile> firstImg = 
                         postFileRepository.findFirstImageByNtime(post.getNtime());
           post.setFirstImg(firstImg.map(PostFile::getNfilename).orElse(null));
       });
       System.out.println(posts);
       return posts;
   }

   public Optional<Post> getPostByPost(String post){
      return postRepository.findByPost(post);
   }

   public Post createPost(Post post){
       return postRepository.save(post);
   }

   public void deletePost(Long id) {
      postRepository.deleteById(id);
   }

   public Post updatePost(Long id, Post updatePost){
      return postRepository.findById(id).map(existingPost -> {
          existingPost.setPost(updatePost.getPost());
          existingPost.setCategory(updatePost.getCategory());
          existingPost.setTitle(updatePost.getTitle());
          existingPost.setContent(updatePost.getContent());
          existingPost.setHashtag(updatePost.getHashtag());
          return postRepository.save(existingPost);
      }).orElseThrow(()-> new RuntimeException(id +"번 업데이트 에러"));
   }

}

