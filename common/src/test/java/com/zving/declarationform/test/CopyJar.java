package com.zving.declarationform.test;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;

/**
 * @author 王育春
 * @mail wyuch@zving.com
 * @date 2017年10月28日
 */
public class CopyJar {

	public static void main(String[] args) {
		File parent = new File("G:/git/declarationForm");
		for (File project : parent.listFiles()) {
			File war = new File(project.getAbsolutePath() + "/target/" + project.getName() + "-0.0.1-SNAPSHOT.war");
			if (war.exists()) {
				copyFile(war, new File(parent.getAbsolutePath() + "/Docker/" + project.getName() + "/" + war.getName()));
				new File(parent.getAbsolutePath() + "/Docker/" + project.getName() + "/").mkdirs();
			} else {
				continue;
			}
			File sh = new File(project.getAbsolutePath() + "/start.sh");
			if (sh.exists()) {
				copyFile(sh, new File(parent.getAbsolutePath() + "/Docker/" + project.getName() + "/start.sh"));
			}
			File dockerfile = new File(project.getAbsolutePath() + "/Dockerfile");
			if (dockerfile.exists()) {
				copyFile(dockerfile, new File(parent.getAbsolutePath() + "/Docker/" + project.getName() + "/Dockerfile"));
			}
		}
	}

	public static void copyFile(File fromFile, File toFile) {
		try {
			FileInputStream ins = new FileInputStream(fromFile);
			FileOutputStream out = new FileOutputStream(toFile);
			byte[] b = new byte[1024];
			int n = 0;
			while ((n = ins.read(b)) != -1) {
				out.write(b, 0, n);
			}

			ins.close();
			out.close();
		} catch (Exception e) {
			e.printStackTrace();
		}

	}
}
