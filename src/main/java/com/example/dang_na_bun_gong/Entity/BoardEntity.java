package com.example.dang_na_bun_gong.Entity;

import java.sql.Timestamp;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import lombok.Data;

@Entity(name = "board")
@Data
public class BoardEntity {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;
	
	@Column(name="user_id", nullable = false)
	private String userid;
	
	private String title;
	
	private String price;

	private String content;
    
    private String filename;

    private String filepath;
    
    @Column(name="write_date")
    private Timestamp writedate;
    
    @Column(name="modify_date")
    private Timestamp modifydate;
}
