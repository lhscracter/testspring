package com.spring.samplegradle.sample;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class SampleService {
	
	@Autowired
	private SampleRepository sampleRepository;

	public Sample findByTitle(String Title) {
		return sampleRepository.findByTitle(Title);
	}

	public List<Sample> findAll() {
		return (List<Sample>) sampleRepository.findAll();
	}

	public void update(Sample sample) {
		
		Sample updateSample = sampleRepository.findById(sample.getId()).orElseThrow(() -> new IllegalArgumentException("No Post Found."));
		
		updateSample.setEmail(sample.getEmail());
		updateSample.setName(sample.getName());
		updateSample.setUsername(sample.getUsername());
		
		if(sample.getWebsite().equals("false")) {
			sampleRepository.delete(updateSample);
		}else {
			sampleRepository.save(updateSample);
		}
	}

	public Optional<Sample> findById(Long i) {
		return sampleRepository.findById(i);
	}

	public void save(Sample sample) {
		sampleRepository.save(sample);
	}

}
