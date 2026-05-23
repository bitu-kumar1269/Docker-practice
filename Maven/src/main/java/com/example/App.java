package com.example;

public class App {
    public static void main(String[] args) {
        System.out.println("Hello, Maven!");
        System.out.println("GroupId    : com.example");
        System.out.println("ArtifactId : hello-maven");
        System.out.println("Version    : 1.0-SNAPSHOT");
        System.out.println("name : Bitu kumar");
    }

    public String greet(String name) {
        return "Hello, " + name + "!";
    }
}

// mvn compile

// # 2. Run the tests
// mvn test

// # 3. Build the JAR
// mvn package

// # 4. Run the JAR directly
// java -jar target/hello-maven-1.0-SNAPSHOT.jar
// java -jar target/hello-maven-1.0-SNAPSHOT.jar