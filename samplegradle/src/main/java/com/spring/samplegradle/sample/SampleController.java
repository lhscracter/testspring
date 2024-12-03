package com.spring.samplegradle.sample;

import java.util.HashMap;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;

@RestController
public class SampleController {
	
	@Autowired
	private ObjectMapper mapper;
	
	@Autowired
	private SampleService sampleService;
	
	@GetMapping("/api/sampleSelectAll")
	public  String test() throws Exception {
		
		HashMap<String, Object> map = new HashMap<String, Object>();
		
		List<Sample> testList = sampleService.findAll();
		
		map.put("sampleList", testList);
		
		String returnData = mapper.writeValueAsString(map);
		
		return returnData;
	}
	
	@GetMapping("/api/dataSubmit")
	public String dataSubmit(Sample sample) throws JsonProcessingException {
		
		System.out.println(sample);
		
		sampleService.save(sample);
		
		return mapper.writeValueAsString(sample);
	}
	
	@PostMapping("/api/dataSubmitJson")
	public String dataSubmitJson( @RequestBody Sample sample) throws JsonProcessingException {
		
		System.out.println(sample);
		
		sampleService.save(sample);
		
		return mapper.writeValueAsString(sample);
	}
	
	@PostMapping("/api/dataSubmitJsonList")
	public String dataSubmitJsonList( @RequestBody List<Sample> sampleList) throws JsonProcessingException {
		
		for (Sample sample : sampleList) {
			
			sampleService.save(sample);
		}
		
		return mapper.writeValueAsString(sampleList);
	}
	
	@PostMapping("/api/dataSubmitJsonListUpdate")
	public String dataSubmitJsonListUpdate( @RequestBody List<Sample> sampleList) throws JsonProcessingException {
		
		for (Sample sample : sampleList) {
			
			sampleService.update(sample);
		}
		
		return mapper.writeValueAsString(sampleList);
	}
}
