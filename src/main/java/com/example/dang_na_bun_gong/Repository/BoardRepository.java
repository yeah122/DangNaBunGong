package com.example.dang_na_bun_gong.Repository;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.dang_na_bun_gong.Entity.BoardEntity;

@Repository
public interface BoardRepository extends JpaRepository<BoardEntity, Integer>{
	Page<BoardEntity> findByTitleContaining(String searchKeyword, Pageable pageable);
}
