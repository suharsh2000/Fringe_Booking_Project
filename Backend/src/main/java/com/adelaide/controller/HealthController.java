package io.github.jiangdequan;

@RestController
public class HealthController {
    @GetMapping("/health")
    public ResponseEntity<String> check() {
        return ResponseEntity.ok("Backend is healthy");
    }
}