package com.zving.declarationform.test;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;

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
			String projectName = project.getName().toLowerCase();
			if (war.exists()) {
				new File(parent.getAbsolutePath() + "/Docker/" + projectName + "/").mkdirs();
				copyFile(war, new File(parent.getAbsolutePath() + "/Docker/" + projectName + "/" + war.getName()));
			} else {
				continue;
			}
			File sh = new File(project.getAbsolutePath() + "/start.sh");
			if (sh.exists()) {
				copyFile(sh, new File(parent.getAbsolutePath() + "/Docker/" + projectName + "/start.sh"));
			}
			File dockerfile = new File(project.getAbsolutePath() + "/Dockerfile");
			if (dockerfile.exists()) {
				copyFile(dockerfile, new File(parent.getAbsolutePath() + "/Docker/" + projectName + "/Dockerfile"));
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
