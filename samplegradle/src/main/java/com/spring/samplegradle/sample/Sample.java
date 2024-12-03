package com.spring.samplegradle.sample;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@NoArgsConstructor
@ToString
@Getter
@Setter
public class Sample {
	
	@Id 
	@GeneratedValue
	private long id;
	
	@Column
	private String title;
	
	@Column
	private String username;
	
	@Column
	private String email;
	
	@Column
	private String name;
	
	@Column
	private String website;

}
