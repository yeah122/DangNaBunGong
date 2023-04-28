package com.example.dang_na_bun_gong.Repository;

import com.example.dang_na_bun_gong.Entity.MemberDeleteEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MemberDeleteRepository extends JpaRepository<MemberDeleteEntity, String> {


}
