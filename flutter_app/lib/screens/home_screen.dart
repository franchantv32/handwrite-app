import 'package:flutter/material.dart';

class HomeScreen extends StatelessWidget {
  const HomeScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: const Text('HandWrite')),
      body: Center(
        child: Column(
          mainAxisSize: MainAxisSize.min,
          children: [
            const Text('Camera, PDF, and Gesture features (placeholders)'),
            const SizedBox(height: 20),
            ElevatedButton(onPressed: () {}, child: const Text('Open Camera')),
            ElevatedButton(onPressed: () {}, child: const Text('Open PDF')),
            ElevatedButton(onPressed: () {}, child: const Text('Gesture Mode')),
          ],
        ),
      ),
    );
  }
}
