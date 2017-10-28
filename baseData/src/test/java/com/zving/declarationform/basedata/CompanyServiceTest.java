package com.zving.declarationform.basedata;

import java.util.List;
import java.util.stream.Collectors;

import org.junit.After;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import com.zving.declarationform.BootBaseData;
import com.zving.declarationform.basedata.schema.CompanyService;
import com.zving.declarationform.model.Company;

import junit.framework.TestCase;

@RunWith(SpringJUnit4ClassRunner.class)
@SpringBootTest(classes = BootBaseData.class)
public class CompanyServiceImplTest {
	@Autowired
	private CompanyService service;

	// 准备数据
	@Before
	public void init() {
		Company company = new Company();
		company.setName("@江南皮鞋厂");
		company.setPhone("010-12345678");
		company.setFax("010-12345678");
		service.add(company);
	}

	// 清理数据
	@After
	public void clean() {
		List<Company> companys = service.list();
		List<Company> delList = companys.stream().filter(company -> "@江南皮鞋厂".equals(company.getName())).collect(Collectors.toList());
		for (Company list : delList) {
			service.delete(list.getId() + "");
		}
	}

	// 测试添加方法
	@Test
	public void testAdd() {
		int total = service.list().size();
		Company company = new Company();
		company.setName("@江南皮鞋厂");
		company.setPhone("010-12345678");
		company.setFax("010-12345678");
		String ret = service.add(company);
		List<Company> afterAddCompanys = service.list();
		TestCase.assertEquals("添加成功", ret);
		TestCase.assertEquals(total + 1, afterAddCompanys.size());
	}

	@Test
	public void testUpdate() {
		List<Company> companys = service.list();
		List<Company> list = companys.stream().filter(company -> "@江南皮鞋厂".equals(company.getName())).collect(Collectors.toList());
		Company company = list.get(0);
		long id = company.getId();
		company.setFax("88888888");
		String ret = service.update(company);
		TestCase.assertEquals("更新成功", ret);
		list = companys.stream().filter(item -> item.getId() == id).collect(Collectors.toList());
		company = list.get(0);
		TestCase.assertEquals("88888888", company.getFax());
	}

	@Test
	public void TestDelet() {
		List<Company> companys = service.list();
		List<Company> list = companys.stream().filter(company -> "@江南皮鞋厂".equals(company.getName())).collect(Collectors.toList());
		Company company = list.get(0);
		String ret = service.delete(company.getId() + "");
		TestCase.assertEquals("删除成功", ret);
	}

	@Test
	public void TestGet() {
		List<Company> companys = service.list();
		List<Company> list = companys.stream().filter(company -> "@江南皮鞋厂".equals(company.getName())).collect(Collectors.toList());
		Company company = list.get(0);
		Company getCompany = service.get(company.getId());
		TestCase.assertEquals(company, getCompany);
	}

}
