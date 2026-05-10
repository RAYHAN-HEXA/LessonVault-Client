import React from "react";
import { Section, Container } from "../../components/UI/Section";

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-900 pt-24">
      <Section padding="lg">
        <Container size="lg">
          <div className="prose dark:prose-invert max-w-none">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">
              Terms of Service
            </h1>

            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Last updated: {new Date().toLocaleDateString()}
            </p>

            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  1. Terms
                </h2>
                <p className="text-gray-600 dark:text-gray-400">
                  By accessing and using DigitalLesson, you accept and agree to be bound by the terms and provision of this agreement.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  2. Use License
                </h2>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Permission is granted to temporarily download one copy of the materials (information or software) on DigitalLesson for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
                </p>
                <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-2">
                  <li>Modifying or copying the materials</li>
                  <li>Using the materials for any commercial purpose or for any public display</li>
                  <li>Attempting to decompile or reverse engineer any software contained on DigitalLesson</li>
                  <li>Transferring the materials to another person or "mirroring" the materials on any other server</li>
                  <li>Removing any copyright or other proprietary notations from the materials</li>
                  <li>Transferring the materials to another person or "mirroring" the materials on any other server</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  3. Disclaimer
                </h2>
                <p className="text-gray-600 dark:text-gray-400">
                  The materials on DigitalLesson are provided on an 'as is' basis. DigitalLesson makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  4. Limitations
                </h2>
                <p className="text-gray-600 dark:text-gray-400">
                  In no event shall DigitalLesson or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on DigitalLesson, even if DigitalLesson or a DigitalLesson authorized representative has been notified orally or in writing of the possibility of such damage.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  5. Accuracy of Materials
                </h2>
                <p className="text-gray-600 dark:text-gray-400">
                  The materials appearing on DigitalLesson could include technical, typographical, or photographic errors. DigitalLesson does not warrant that any of the materials on its Internet web site are accurate, complete, or current. DigitalLesson may make changes to the materials contained on its web site at any time without notice.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  6. Links
                </h2>
                <p className="text-gray-600 dark:text-gray-400">
                  DigitalLesson has not reviewed all of the sites linked to its Internet web site and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by DigitalLesson of the site. Use of any such linked web site is at the user's own risk.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  7. Modifications
                </h2>
                <p className="text-gray-600 dark:text-gray-400">
                  DigitalLesson may revise these terms of service for its web site at any time without notice. By using this web site, you are agreeing to be bound by the then current version of these terms of service.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  8. Governing Law
                </h2>
                <p className="text-gray-600 dark:text-gray-400">
                  These terms and conditions are governed by and construed in accordance with the laws of the United States and you irrevocably submit to the exclusive jurisdiction of the courts in that location.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
};

export default TermsOfService;
