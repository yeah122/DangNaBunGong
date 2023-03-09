package com.example.dang_na_bun_gong.Service;


import com.example.dang_na_bun_gong.Entity.MemberDeleteEntity;
import com.example.dang_na_bun_gong.Entity.MemberEntity;
import com.example.dang_na_bun_gong.Repository.MemberDeleteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class MemberDeleteService {
    @Autowired
    private MemberDeleteRepository memberDeleteRepository;

    public void memberDeleteSave(MemberDeleteEntity memberdeleteEntity) {
        memberDeleteRepository.save(memberdeleteEntity);

    }
}